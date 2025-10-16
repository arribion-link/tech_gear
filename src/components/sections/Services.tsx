import services from "../../data/service"

const Services = () => {
  return (
    <>
      <div className="text-center">
        <h1>Services</h1>
        <p>We provide more than hight tech product!</p>
      </div>
      
      <div className="services container flex p-8" >
        {
          services.map((service) => {
             return <div key={service.id} className="flex bg-gray-900 m-4">
                <div>
                  <img src={service.image} alt="" />
                </div>
                <div>
                  <h1>{service.name}</h1>
                  <p>{ service.description }</p>
                </div>
              </div>
            })
            }
        </div>
    </>
  )
}

export default Services
