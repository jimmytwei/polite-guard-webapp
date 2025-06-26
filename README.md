# Polite Guard Web App

This repo contains code samples to run the [Intel/polite-guard](https://huggingface.co/Intel/polite-guard) SLM (Small Language Model) in a web browser. Polite Guard is a NLP model used to classify text into four categories of politeness: polite, somewhat polite, neutral and impolite.

There are two samples that are provided. 
| Sample                           | Description |
| -------------------------------- | ----------- |
| [index.html](index.html)         | This sample uses the [transformers.js](https://huggingface.co/docs/transformers.js/en/index) JavaScript library and the script and model is loaded directly from Hugging Face. Pipelines are used to help simplify the code for inferencing. |
| [index-ort.html](index-ort.html) | This sample uses the [ONNX Runtime Web](https://onnxruntime.ai/docs/get-started/with-javascript/web.html) JavaScript library and demonstrates how to run the SLM locally in the browser. No data is sent externally. The ONNX model, used by ORT Web, and a BERT tokenizer library (from tensorflow.js) are included. |

Both samples use [Bootstrap](https://getbootstrap.com/) for styling and run on the CPU but can easily be modified to run on any other supported device (GPU, NPU) through the appropriate settings in the corresponding JavaScript libraries. 

> When opening the HTML page locally in a Chromium based browser, please use the `--disable-web-security` option to enable CORS. A [launch_chrome.bat](https://github.com/intel-sandbox/polite-bert-webapp/tree/main/launch_chrome.bat) script is provided as an example for use with Google Chrome.
