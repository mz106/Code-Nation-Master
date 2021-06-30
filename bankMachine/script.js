
class BankCustomer {
    constructor(name, balance, pin) {
        this.name = name;
        this.balance = balance;
        this.pin = pin
    }

    name() {
        return this.name;
    }

    pin() {
        return this.pin;
    }

    balance() {
        return this.balance;
        
    }

    withdraw(amount) {
        return this.balance -= amount;
    }

    add(amount) {
        return this.balance += amount;
    }
};

const michael = new BankCustomer('michael', '3000', 1234);

const pinCheck = (user, pin, withdrawal, deposit) => {
    if (pin === user.pin) {
        console.log(`Your pin is correct.`)
        console.log(`Your balance is £${user.balance}.`);
        if (user.balance > 0) {
            console.log(`You may withdraw up to £${user.balance}.`)
        } else if( user.balance === 0) {
            console.log(`Your balance is £0. You may not withdraw funds. `)
        }
    } else {
        console.log('Your entry is not valid. Please enter your pin again.')
    }

    if (withdrawal > 0 && withdrawal <= user.balance) {
        user.withdraw(withdrawal);
        console.log(`You have withdrawn £${withdrawal}.`);
        console.log(`Your balance is £${user.balance}`)
    } else if (withdrawal > 0 && user.balance === 0) {
        console.log(`You have insufficient funds to make a withdrawal.`);
    } else {
        console.log(`You have not made a withdrawl. Your balance is still £${user.balance}.`)
    }

    if (deposit > 0) {
        user.add(deposit);
        console.log(`Thank you for depositing £${deposit}. Your balance is now £${user.balance}.`)
    } else {
        console.log(`You have not made a deposit. Your balance is £${user.balance}.`)
    }
};


pinCheck(michael, 1234, 600, 100);


