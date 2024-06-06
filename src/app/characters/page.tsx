"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import Card from "@/components/card";
import Footer from "@/components/footer";
import Loading from "@/components/loading";
import { useEffect, useState } from "react";
import Search from "@/components/search";
import Filter from "@/components/filter/Filter";
import styles from "@/app/styles/characters.module.css";

const Pagination = dynamic(() => import("@/components/pagination/index"), {
  ssr: false,
});

const Characters = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const [loading, setLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState({
    info: { pages: 0, count: "" },
    results: [],
  });
  const [search, setSearch] = useState("");
  const { info, results } = fetchedData;

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    setLoading(true);
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setFetchedData(data);
        setLoading(false);
      });
  }, [api]);
  return (
    <main >
      <div className={styles.app}>
      {/* <Image
              src="/assets/fondoStart.webp"
              quality={100}
              fill
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
            /> */}
        <div className={styles.logoRickMorty}>
          <Link href="/">
            <Image
              src="/assets/logo.png"
              width={300}
              height={300}
              alt=""
              priority
            />
          </Link>
        </div>
        <div className="">
          <div >
            <Search setSearch={setSearch} setPageNumber={setPageNumber} />
            <div className="">
              {info && info.count ? <>{info.count}</> : "0"} Characters
            </div>
          </div>
          <div className="">
            <div>
              <Filter
                setStatus={setStatus}
                setGender={setGender}
                setSpecies={setSpecies}
                setPageNumber={setPageNumber}
              />
            </div>
            <div className="">
              <div className="">
                {loading ? (
                  <div className="">
                    <Loading />
                  </div>
                ) : (
                  <div className={styles.card}>
                    <div className={styles.character_photo}>
                      <div className={styles.image_characters}>
                        <Card results={results} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <Pagination
                info={info}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Characters;
