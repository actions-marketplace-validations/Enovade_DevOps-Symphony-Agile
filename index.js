const axios = require('axios');
const core = require('@actions/core');
const github = require('@actions/github');


const octokit = github.getOctokit(process.env.GITHUB_TOKEN);
  const { context } = github;
const { owner, repo } = context.repo;

console.log(owner, repo)

const docPath = core.getInput('path', { required: true });
const encoding = core.encoding('encoding', { required: true });


var analyzeData = {}
var recommendData = {}
var resultData = ""

// let payload = {
//     "question" : jsondata
// }
// let getAnalyze = axios.post(analyzeURL, payload)
// .then(res => {
//     if (res.status === 200) {
//         const analyzeData = res.data.text
//         console.log("-------------------------------------------------")
//         console.log(analyzeData)
//         console.log("-------------------------------------------------\n")
//         const analyzePayload = {
//             "question" : analyzeData
//         }
//         let getRecommend = axios.post(recommendURL, analyzePayload)
//         .then(resRecommend => {
//             if (res.status === 200) {
//                 //console.log(resRecommend.data)
//                 //let myData = JSON.stringify(res.data)
//                 const recommendData = resRecommend.data.text
//                 console.log("-------------------------------------------------\n")
//                 console.log(recommendData)
//                 console.log("-------------------------------------------------\n")
//                 resultData = "# K6.io Performance & Stress Test Report\n" + "\n## Reports\n"+ analyzeData + "\n## Recommendation\n" + recommendData + "\n";
//                 console.log("-------------------------------------------------\n")
//                 console.log(resultData)

//                 core.setOutput('jawapan', resultData);
//             }
//         })
//     }
// })
// .catch(err => {
//     console.error(err); 
// })