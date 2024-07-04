
'use client'
import Card from "@/components/card"
import Loading from "@/components/loading/index"
import Link from "next/link"
import Image from 'next/image'
import { useEffect, useState } from "react"
import { EpisodeInfoProps } from '@/types/type'
import Option from '@/components/filter/Option'

const Episodes = () => {
    const [results, setResults] = useState([] as any[])
  const [loading, setLoading] = useState(true)
  const [info, setInfo] = useState<EpisodeInfoProps>({
    air_date: '',
    name: ''
  })
  const { air_date, name } = info
  const [id, setID] = useState(1)
  const api = `https://rickandmortyapi.com/api/episode/${id}`

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      const data = await fetch(api).then(res => res.json())
      setInfo(data)
      setLoading(false)
      const characterData = await Promise.all(
        data.characters.map(async (x: RequestInfo | URL) => {
          const res = await fetch(x)
          return await res.json()
        })
      )
      setResults(characterData)
    }
    fetchData()
  }, [api])

  return (
    <main className="">
      <div className="">
        <div className="">
          <Link href="/">
            <Image
            className=""
            src="/assets/logo.png"
            width={400}
            height={400}
            alt=""
            priority
            />
          </Link>
        </div>
        <div className="">
          <div className="">
            <h1 className="">
              Episode name :{' '}
              <span className="">
                {name === '' ? 'Unknown' : name}
              </span>
            </h1>
            <h5 className="">
              Air Date: {air_date === '' ? 'Unknown' : air_date}
            </h5>
            <div className="">51 Episodes</div>
          </div>
          <div className=''>
            <div className="">
              <div>Pick Episodes</div>
              <Option name="Episode" changeID={setID} total={51} />
            </div>
            <div className="flex flex-col gap-[1rem]">
              <div className="">
                {loading ? (
                  <div className="m-auto">
                    <Loading />
                  </div>
                ) : (
                  <Card results={results} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
export default Episodes