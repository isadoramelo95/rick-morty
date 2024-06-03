import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
      <Image
            src="/assets/casarickmorty.jpg"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
            alt={""}
          />
        <Image
          src="/assets/logo.png"
          alt=""
          width={600}
          height={600}
          className={styles.logoRickmorty}
        />
        
        <div>
          <Link href="/characters" >
            <Image 
            src="/assets/dog.png"
            alt="Characters"
            width={200}
            height={200}
            className={styles.characters}/>
          </Link>
        </div>
        <Link href="/episodes" >
        <Image 
            src="/assets/rmseason.png"
            alt="Episodes"
            width={300}
            height={400}
            className={styles.episodes}/>
        </Link>
      </div>
    </main>
  );
}
