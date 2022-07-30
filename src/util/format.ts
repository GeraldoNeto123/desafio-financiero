export const { format: formatPrice } = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
});

export const { format: formatDate } = new Intl.DateTimeFormat('pt-BR');
