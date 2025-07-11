import { env, pipeline } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers'

const classifier = await pipeline('text-classification', 'Intel/polite-guard')

async function classify(input) {
  const output = await classifier(input)
  return output[0].label
}

export { classify }
