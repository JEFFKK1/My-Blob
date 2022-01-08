import classes from "./hero.module.css";
import Image from "next/image";
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/IMG_2349.JPG"
          alt="I am Jeff"
          width={300}
          height={300}
        />
      </div>
      <div>Hello I am Jeff</div>
      <p>I blog about web stuff and other nasty things</p>
    </section>
  );
}
export default Hero;
