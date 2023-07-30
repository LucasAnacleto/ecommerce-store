interface CurrencyProps{
  value?: string | number;
}

const formatter = new Intl.NumberFormat("pt-BR", {
  style: 'currency',
  currency: 'BRL'
});

const Currency: React.FC<CurrencyProps> = ({
  value
}) => {
  return (
    <div className="font-semibold">
      {formatter.format(Number(value))}
    </div>
  )
}

export default Currency;