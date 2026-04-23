import Bytez from "bytez.js"

const key = "73545f2d4aec98bfe7321e18daa36b72"
const sdk = new Bytez(key)

async function test() {
  try {
    const model = sdk.model("meta-llama/Llama-3.1-8B-Instruct")
    const res = await model.run([{"role": "user", "content": "Analyze the image name: tree_disease.jpg. Output a JSON with prediction and confidence."}])
    console.log("LLM result:", JSON.stringify(res, null, 2))
  } catch (err) {
    console.error("Error:", err)
  }
}
test()
