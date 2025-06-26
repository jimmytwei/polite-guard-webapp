import { loadTokenizer } from './bert_tokenizer.js'

const session = await ort.InferenceSession.create('./model/onnx/model.onnx')
const labels = ['polite', 'somewhat polite', 'neutral', 'impolite']

function get_input(tokens) {
  tokens.unshift(101)   // [CLS] beginning of input
  tokens.push(102)      // [SEP] end of input

  const length = tokens.length
  const input_ids = BigInt64Array.from(tokens, BigInt)
  const attention_mask = BigInt64Array.from(Array(length).fill(1n))
  const token_type_ids = BigInt64Array.from(Array(length).fill(0n))

  return {
    input_ids: new ort.Tensor('int64', input_ids, [1, length]),
    attention_mask: new ort.Tensor('int64', attention_mask, [1, length]),
    token_type_ids: new ort.Tensor('int64', token_type_ids, [1, length])
  }
}

async function classify(input) {
  const tokens = await loadTokenizer().then(t => {
    return t.tokenize(input)
  })

  const feeds = get_input(tokens)
  const output = await session.run(feeds)
  const maxIndex = output.logits.data.indexOf(Math.max(...output.logits.data))
  return labels[maxIndex]
}

export { classify }
