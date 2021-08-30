const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// 1. Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  // const nomeRecebedor = Object.entries(order.order.delivery)[0][1];
  // const nomeComprador = Object.entries(order)[0][1];
  // const telComprador = Object.entries(order)[1][1];
  // const endCompletoComprador = Object.entries(order)[2][1];
  // const ruaComprador = Object.values(endCompletoComprador)[0];
  // const numComprador = Object.values(endCompletoComprador)[1];
  // const aptoComprador = Object.values(endCompletoComprador)[2];

  const nomeRecebedor = order.order.delivery.deliveryPerson;
  const nomeComprador = order.name;
  const telComprador = order.phoneNumber;
  const ruaComprador = order.address.street;
  const numComprador = order.address.number;
  const aptoComprador = order.address.apartment;

  // const nomeRecebedor = Object.entries(order);
  // for (let par of nomeRecebedor) {
  //   console.log(par[1].street)
  // }
  
  console.log(`Olá ${nomeRecebedor}, entrega para: ${nomeComprador}, Telefone: ${telComprador}, ${ruaComprador}, Nº: ${numComprador}, AP ${aptoComprador}`)
}

customerInfo(order);

// 2. Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
// Modifique o nome da pessoa compradora.
// Modifique o valor total da compra para R$ 50,00.

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const mudaNome = {
    name: 'Luiz Silva',
  }

  const mudaPagamento = {
    payment: {
      total: 50,
    },
  }

  const newOrder = Object.assign({}, order, mudaNome, mudaPagamento);

  const nomeComprador = Object.entries(newOrder)[0][1];
  const nomePizzaUm = Object.entries(newOrder.order.pizza)[0][0];
  const nomePizzaDois = Object.entries(newOrder.order.pizza)[1][0];
  const nomeRefri = Object.entries(newOrder.order.drinks.coke)[0][1];
  const valorPedido = Object.entries(newOrder.payment)[0][1];

  console.log(`Olá ${nomeComprador}, o total do seu pedido de ${nomePizzaUm}, ${nomePizzaDois} e ${nomeRefri} é R$ ${valorPedido}`)

}

orderModifier(order);
