import numbro from 'numbro'

export function formatCurrency (input) {
  const number = typeof input === 'number' ? input : parseInt(input)
  return ` IDR ${numbro(number).format({
    thousandSeparated: true,
    mantissa: 0
  })}`
}
