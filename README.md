ACA Practice Problems
---------------------

Getting Started
---------------

 1. Fork the repository
 2. Clone the repository
 3. Navigate into the projects directory
	 1. Run `npm install`
	 2. Set your upstream to the base repo `git remote add upstream git@github.com:canaandavis/aca-practice-problems.git`
	 3. Ensure that your origin is set to your repo and the upstream is set to the base repo `git remote -v`


Usage
-----

As you work through the problems each week you will need to fill out the file in the `src` folder that corresponds with the new test file located in the `spec` folder.

When you want to run the test you can simply run the command `npm test`

When you are happy with your answer, and all test pass, push the changes up to your repo.

We will release new problems at the begining of each week.  When these problems are avaliable you need to pull them in from the base repo.  To do this run `git pull upstream`

This will fetch the updated repo and merge any changes into your current branch.

As always, if you have some questions, don't be afraid to ask!
