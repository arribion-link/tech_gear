import members from "../../data/member"

const Partiners = () => {
  return (
    <>
      <div>
        <h1>MEMBERS</h1>
        <p>We proudly introduce our powerful members</p>
      </div>
      <div className="members-container flex">
        {
          members.map((member) => (
            <div key={member.id}>
              <div>
                <img src={member.logo} alt="" />
              </div>
              <h2>{ member.name }</h2>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Partiners
