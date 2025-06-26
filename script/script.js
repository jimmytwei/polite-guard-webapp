import { env, pipeline } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers'

env.allowLocalModels = true
env.allowRemoteModels = false
env.localModelPath = window.location.href.substring(0, window.location.href.lastIndexOf('/'))

const classifier = await pipeline('text-classification', 'model')

async function classify(input) {
  const output = await classifier(input)
  return output[0].label
}

export { classify }
