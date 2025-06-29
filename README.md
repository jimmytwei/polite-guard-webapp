# Polite Guard Web App

This repo contains code samples to run the [Intel/polite-guard](https://huggingface.co/Intel/polite-guard) SLM in a web browser. Polite Guard is a NLP model used to classify text into four categories of politeness: `polite`, `somewhat polite`, `neutral` and `impolite`. It can be integrated into existing applications to ensure that any input text satisifes the desired category of politeness. 

There are two samples that are provided. 
| Sample                           | Description |
| -------------------------------- | ----------- |
| [index.html](index.html)         | This sample uses the [transformers.js](https://huggingface.co/docs/transformers.js/en/index) JavaScript library and the script and model are loaded directly from Hugging Face. Pipelines are used to help simplify the code for inferencing. You can test the sample [here](https://jimmytwei.github.io/polite-guard). |
| [index-ort.html](index-ort.html) | This sample uses the [ONNX Runtime Web](https://onnxruntime.ai/docs/get-started/with-javascript/web.html) JavaScript library and demonstrates how to run the SLM locally in the browser. No data is sent over the Internet. The ONNX model and associated metadata, the ORT Web runtime libraries, and a BERT tokenizer (from tensorflow.js) are all included in this repo. |

Both samples use [Bootstrap](https://getbootstrap.com/) for styling and run on the CPU but can easily be modified to run on any supported device (GPU, NPU) through the appropriate settings in the corresponding JavaScript libraries. 

> When opening the HTML page locally in a Chromium based browser, please use the `--disable-web-security` option to enable CORS. A [launch_chrome.bat](https://github.com/intel-sandbox/polite-bert-webapp/tree/main/launch_chrome.bat) script is provided as an example for use with Google Chrome. This is not needed if you are planning to host the sample on a local webserver.
