const axios = require('axios');
const core = require('@actions/core');
const github = require('@actions/github');

//const time = (new Date()).toTimeString();

// const octokit = github.getOctokit(process.env.GITHUB_TOKEN);
const { context } = github;
const { owner, repo } = context.repo;

//console.log(octokit.GITHUB_TOKEN)
console.log(owner, repo)

const agileURL = core.getInput('agileURL', { required: true });
const mymd = core.getInput('result', { required: true });

console.log(mymd)

var agileData = {}
var resultData = ""

 let payload = {
     "question" : mymd
 }
 let getAnalyze = axios.post(agileURL, payload)
.then(res => {
    if (res.status === 200) {
        const agileData = res.data.text
        console.log("-------------------------------------------------")
        console.log(agileData)
        console.log("-------------------------------------------------\n")
        core.setOutput('jawapan', "Successfully create tasks");
    }
})
.catch(err => {
    console.error(err); 
})