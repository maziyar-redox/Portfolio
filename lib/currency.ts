export function NumberToCurrency(Price: number) {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", currencyDisplay: "narrowSymbol" }).format(Price);
};