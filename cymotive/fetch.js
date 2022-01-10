(
  async function sendReports() {
    // import reportJSON from "./reports.json"
    // console.log(reportJSON, "myjsontest")
    const response = await axios.post('https://mdmg0bx1qk.execute-api.eu-west-1.amazonaws.com/api/numberOfAnomalies', reportJSON, { headers: { Accept: "application/json" } })
    console.log(response)

    const { hello: bye, } = someobj;
  })()