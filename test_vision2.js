import Bytez from "bytez.js"

const key = "73545f2d4aec98bfe7321e18daa36b72"
const sdk = new Bytez(key)

async function test() {
  try {
    const model = sdk.model("google/vit-base-patch16-224")
    const res = await model.run("https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=1000")
    console.log("ViT result:", JSON.stringify(res, null, 2))
  } catch (err) {
    console.error("Error:", err)
  }
}
test()
