
---

# meldCX Automated Testing Project

**Description**: This repository contains automated test cases for the login and logout functionalities of a web application developed by meldCX.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
- [Test Cases](#test-cases)
- [Installation](#installation)
- - [Switching Node.js Version](#switching-nodejs-version)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project aims to automate testing for the login and logout functionalities of a web application developed by meldCX using [Cypress](https://www.cypress.io/), a modern end-to-end testing framework.


![image](https://github.com/Tanveerrifu/qa-code-quiz/assets/47789876/cf6575a1-e71d-4dfd-9220-93459b28eee6)


## Login




https://github.com/Tanveerrifu/qa-code-quiz/assets/47789876/b8e2d087-2d86-4535-b744-a0ea8a6127e0





## Logout




https://github.com/Tanveerrifu/qa-code-quiz/assets/47789876/e387e484-bf6d-499b-8b36-ac17f5cefd25





## User Details





https://github.com/Tanveerrifu/qa-code-quiz/assets/47789876/817b9174-de82-4d7c-8833-5a606b9d96b1





## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v10.24.1)
- [Yarn](https://yarnpkg.com/) (v1.22.15)

To switch to Node.js v10.24.1, you can use [nvm](https://github.com/nvm-sh/nvm). Install nvm and then use the following commands:

```bash
nvm install 10.24.1
nvm use 10.24.1
```

To install Yarn, follow the instructions on the [Yarn website](https://classic.yarnpkg.com/en/docs/install/).

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/meldCX/your-repo-name.git
   ```

2. Navigate to the project directory:
   ```bash
   cd your-repo-name
   ```

3. Install the required dependencies using Yarn:
   ```bash
   yarn install
   ```

## Test Cases

The following test cases have been implemented and can be found in the `cypress/integration` directory:

1. **User Should be Able to Login with Valid Data**: Test to verify successful login with valid credentials.
2. **Show Sign Up Instruction for No Account**: Test to check if proper instructions are displayed for users without an account.
3. **Show Error Message for Empty Fields**: Test to validate error message when both fields are empty.
4. **Show Error Message for Empty Password**: Test to check error message when the password field is empty.
5. **Show Error Message for Empty Username**: Test to validate error message when the username field is empty.
6. **Show Error Message for Invalid Username Characters**: Test to verify error message when an invalid username is entered.
7. **Show Error Message for Invalid Password**: Test to check error message when an invalid password is entered.
8. **Show Error Message for Invalid Credentials**: Test to validate error message when invalid credentials are used.
9. **Show Error Message for Space in Password and Username**: Test to check error message when spaces are used in credentials.
10. **Logout User and Verify Redirect**: Test to verify successful logout and redirection to the login page.

## Installation

Make sure you have Node.js (v10.24.1) and Yarn (v1.22.15) installed. Clone the repository and navigate to the project directory using the steps provided in the "Getting Started" section. Then, install the dependencies by running:

```bash
yarn install
```

## Switching Node.js Version

To switch to the required Node.js version (v10.24.1), you can use [nvm](https://github.com/nvm-sh/nvm):

```bash
nvm install 10.24.1
nvm use 10.24.1
```

## Usage

To run the test cases, execute the following command:

```bash
yarn cypress open

# or
yarn cypress run
```

This will launch the Cypress test runner, allowing you to see the test execution and results.

## Contributing

Contributions are welcome! If you find any issues or want to add more test cases, feel free to submit a pull request.



---

