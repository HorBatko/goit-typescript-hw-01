interface Address {
    city: string;
    country: string;
}

interface Users {
    name: string;
    age: number;
    email: string;
    address?: Address;
}

const mango: Users = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com',
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const poly: Users = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com'
};
