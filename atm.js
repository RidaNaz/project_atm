import inquirer from 'inquirer';
async function atm() {
    console.log("Welcome to ABC Bank!");
    const userData = await inquirer.prompt([
        {
            type: "string",
            name: "userId",
            message: "Insert your card and enter ID"
        }, {
            type: "number",
            name: "userPin",
            message: "Enter 4-digit pin"
        }, {
            type: "list",
            name: "accountType",
            message: "Select your account type",
            choices: ["Current Account", "Saving Account"]
        }, {
            type: "list",
            name: "transactionType",
            message: "Select transaction type",
            choices: ["Fast Cash Withdrawl", "Normal Withdrawl", "Balance"]
        }, {
            type: "list",
            name: "amount",
            message: "Select withdrawl amount",
            choices: ["PKR 1000", "PKR 2000", "PKR 5000", "PKR 10000"],
            when(userData) {
                return userData.transactionType === "Fast Cash Withdrawl";
            },
        }, {
            type: "number",
            name: "amount",
            message: "Enter withdrawl amount",
            when(userData) {
                return userData.transactionType === "Normal Withdrawl";
            },
        }
    ]);
    const balance = Math.floor(Math.random() * 1000000);
    if (userData.transactionType === "Fast Cash Withdrawl" || userData.transactionType === "Normal Withdrawl") {
        console.log(`Your current balance is PKR ${balance.toLocaleString()}`);
        const remainingBal = balance - userData.amount;
        if (balance >= userData.amount) {
            console.log(`Transaction successful! your remaining balance is PKR ${remainingBal.toLocaleString()}`);
        }
        else {
            console.log("Please try again with a lower amount");
        }
    }
    else if (userData.transactionType === "Balance") {
        console.log(`Your current balance is PKR ${balance.toLocaleString()}`);
    }
}
atm();
