<h1 align="center">wb-github</h1>
<h3 align="center"><a href="https://workerb.io/">workerB</a> package for <a href="https://github.com/">Github</a></h3>
<p align="center">
	 <img height="300" width="600" src="https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Social_dino-with-hat.gif">
</p>
<h3 align="center">For Github Pros</h3>

## Demo

<div align="center">
  <a href="http://www.youtube.com/watch?v=FZogrzyMrEM">
     <img 
      src="https://user-images.githubusercontent.com/29889620/88480229-5ce5b200-cf72-11ea-803f-c2621d4570d4.png"
      alt="Workerb GitHub Package" 
      style="width:100%;"
     >
  </a>
</div>

## How to install
* Create account on [workerb](https://workerb.io/).
* Install [workerb extension](https://chrome.google.com/webstore/detail/jdbakbjkiklbibfccegfejjdlcgpnnpe).
* Add Github package.
* Setup Github package.
*  🚀🚀

## Actions

### Repo
* [`github repo`](./src/actions/repo/options/index.ts) - Open the global search for repositories.
* [`github repo ${search term}`](./src/actions/repo/options/index.ts) - Search all the repositories on github.
* [`github repo ${repo}`](./src/actions/repo/options/index.ts) - Open selected repo.
* [`github repo ${repo} delete`](./src/actions/repo/options/delete.ts) - Delete selected repo.
* [`github repo new ${reponame} ${organisationname}`](./src/actions/repo/new.ts) - Create a new repo with the reponame provided. If you don't provide a repo name then it will ask you while the script will be on github new repository page.

### PRs
* [`github repo ${repo} PRs`](./src/actions/repo/options/PRs/options/index.ts) - Open the PR list for the selected repo.
* [`github repo ${repo} PRs ${search term}`](./src/actions/repo/options/PRs/options/index.ts) - Search PR list for the selected repo.
* [`github repo ${repo} PRs ${pr}`](./src/actions/repo/options/PRs/options/index.ts) - Open the selected PR.
* [`github repo ${repo} PRs create ${compare} ${base}`](./src/actions/repo/options/PRs/create.ts) - Create a new PR.
* [`github repo ${repo} PRs ${pr} merge`](./src/actions/repo/options/PRs/options/merge.ts) - Merge selected PR.
* [`github repo ${repo} PRs ${pr} close`](./src/actions/repo/options/PRs/options/close.ts) - Close selected PR.

### Issues
* [`github repo ${repo} issues`](./src/actions/repo/options/issues/options/index.ts) - Open the issues of the selected repo.
* [`github repo ${repo} issues ${search term}`](./src/actions/repo/options/issues/options/index.ts) - Search issues of the selected repo.
* [`github repo ${repo} issues ${issue}`](./src/actions/repo/options/issues/options/index.ts) - Open selected issue.
* [`github repo ${repo} issues create ${issueTitle}`](./src/actions/repo/options/issues/create.ts) - Create a new issue with provided title.
* [`github repo ${repo} issues ${issue} close`](./src/actions/repo/options/issues/options/close.ts) - Close selected issue.

## Development
* To install project dependencies, run `yarn install`. 
* To build the project, run `yarn build`.
* To continuously build the project, run `yarn watch`.
* Create `.env` file inside your root folder and put your github access token in `accessToken` field.
* Run `yarn build` or `yarn watch` in terminal
* Log into https://workerb.app.
* Run `dev on` in the workerB action bar.
* Run`loadDir <path>` in the workerB action bar. `path` is the path of the build folder generated by yarn.

## Support
* [Forums](http://forums.workerb.io/)
