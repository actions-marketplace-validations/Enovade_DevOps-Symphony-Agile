const axios = require('axios');
const core = require('@actions/core');
const github = require('@actions/github');
const {Octokit} = require("@octokit/core");

const agileURL = core.getInput('agileURL', { required: true });
const mymd = core.getInput('result', { required: true });
const mytoken = core.getInput('uid', { required: true });

const octokit = new Octokit({
  auth: mytoken,
});

const { context } = github;
const { owner, repo } = context.repo;

console.log(owner, repo)

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
        console.log("----------------Agile Data--------------------")
        console.log(agileData)
        createIssue();
        core.setOutput('jawapan', "Successfully create tasks");
    }
})
.catch(err => {
    console.error(err); 
})


async function createIssue() {
    const { data } = await octokit.request("POST /repos/Enovade/test-agile/issues", {
      owner: "Enovade",
      repo: "test-agile",
      title: "Issue Title",
      body: "Description of the issue.",
      labels: ["bug"],
      assignees: ["hanafiah-enovade"],
    });
    console.log(data);
  }