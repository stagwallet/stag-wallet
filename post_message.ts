const axios = require('axios');

(async () => {

  const rawTx = "0100000001598c3ac0ffeaff18786c2126c1a11f7e094b63b137e04ef7983c6ebc1b0fbd14020000006b483045022100f7b614061fc036dab9608987dc31d6b2f2b88e98ba352c9972ef1d93daa29bba022068abc96b064bf63d6a44455951675bf7fbf55c03a09a41fc62fb6f87ead97fd64121020bd029230032c81edc403492d9828d174bb9a8d40f18bcd53d45c931f44f5979ffffffff030000000000000000fd0a01006a2231394878696756345179427633744870515663554551797131707a5a56646f41757445506c656173652063616e2077652068617665206d65737361676573206265206175746f2d706f737465642066726f6d20706f772e636f2f6d65657420636f6d6d656e74733f0a746578742f706c61696e057574662d38017c223150755161374b36324d694b43747373534c4b79316b683536575755374d7455523503534554036170700b636861742e706f772e636f0474797065076d657373616765077061796d61696c156f77656e6b656c6c6f67674072656c6179782e696f07636f6e74657874076368616e6e656c076368616e6e656c11706f77636f2d646576656c6f706d656e74e6000000000000001976a914ce1dfcd1a333bfcaf4a5b0190681b1a6dc4aa55788aceb0c0000000000001976a9149bcc623c910f75f203de79ea9f9286dc189faf0e88ac00000000"

  const result = await axios.post('https://b.map.sv/ingest', {
    rawTx
  })

  console.log(result)

})()

