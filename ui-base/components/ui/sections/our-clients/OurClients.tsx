import Image from "next/image"

interface OurClientsProps {
  clients: {
    name: string
    logoUrl: string
  }[]
}

export function OurClients({ clients }: OurClientsProps) {
  return (
    <div className="relative flex w-full max-w-[1110px] flex-wrap items-center justify-center p-8 md:justify-between">
      <div className="absolute top-0 h-[1px] w-full bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100"></div>
      {clients?.map((client, index) => (
        <Image
          key={index}
          alt={client.name}
          loading="lazy"
          src={client.logoUrl}
          width={100}
          height={28}
          className="m-4 w-[100px] object-cover md:m-0"
        />
      ))}
      <div className="absolute bottom-0 top-auto h-[1px] w-full bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100"></div>
    </div>
  )
}
