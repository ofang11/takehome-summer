class ConsumerAgent {
    purchaseQuantity(wallet, productPrice) {
        throw new Error("This method should never be called on the parent class");
    }
}

class Gullible extends ConsumerAgent {
    purchaseQuantity(wallet, productPrice) {
        if (wallet < productPrice) {
            return 0;
        }
        else {
            return Math.floor(wallet / productPrice);
        }

    }
}

export class Gullible extends ConsumerAgent {
    purchaseQuantity(wallet, productPrice) {
        if (wallet < productPrice) {
            return 0;
        }
        else {
            return Math.floor(wallet / productPrice);
        }
    }
}

class TitforTat extends ConsumerAgent {
    purchaseQuantity(wallet, productPrice) {
        return Math.floor(wallet / productPrice);
    }
}

export class TitforTat extends ConsumerAgent {
    purchaseQuantity(wallet, productPrice) {
        return Math.floor(wallet / productPrice);
    }
}

class AnyinLastTwo extends ConsumerAgent {
    purchaseQuantity(wallet, productPrice) {
        return Math.floor(wallet / productPrice);
    }
}

export class AnyinLastTwo extends ConsumerAgent {
    purchaseQuantity(wallet, productPrice) {
        return Math.floor(wallet / productPrice);
    }
}

export function getConsumerAgentFromId(id) {
    switch (id) {
        case "Gullible":
            return new Gullible()
        case "Tit for tat":
            return new TitforTat()
        case "Any in Last Two":
            return new AnyinLastTwo()
        default:
            console.log("No bot found with that ID");
    }
}