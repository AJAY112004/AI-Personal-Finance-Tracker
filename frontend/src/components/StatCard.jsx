function StatCard({
  title,
  value,
  subtitle,
  type
}) {

  return (

    <div className={`stat-card ${type}`}>

      <h4>{title}</h4>

      <h2>
        ₹{value.toLocaleString()}
      </h2>

      <p>{subtitle}</p>

    </div>

  );

}

export default StatCard;