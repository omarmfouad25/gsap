import { useGSAP } from "@gsap/react"
import { openingHours, socials } from "../../constants"
import { SplitText } from "gsap/all"
import gsap from "gsap"

const Contact = () => {
    useGSAP(() => {
      const titleSplit = SplitText.create("#contact h2",{type: "words"})
        const timeline = gsap.timeline({
            scrollTrigger:{
                trigger: "#contact",
                start: "top 90%",
                scrub: true
            },
            ease: "power1.inOut",
        })
        timeline
        .from(titleSplit.words, {
          opacity: 0,
          yPercent: 100,
          stagger: 0.02
        })
        .from('#contact h3, #contact p', {
          opacity: 0,
          yPercent: 100,
          stagger: 0.02
        })
        .to('#f-right-leaf', { y: -90, duration: 1, ease:"power1.inOut" })
        .to('#f-left-leaf', { y: -90, duration: 1, ease:"power1.inOut" }, "<")
    })
  return (
    <footer id="contact">
        <img src="/images/footer-right-leaf.png" alt="Contact Right Leaf" id="f-right-leaf" />
        <img src="/images/footer-left-leaf.png" alt="Contact Left Leaf" id="f-left-leaf" />
        <div className="content">
            <h2>Where to Find Us</h2>
           <div>
             <h3>Visit Our Bar</h3>
             <p>Rove Hotel Expo City, Dubai, UAE</p>
           </div>
           <div>
            <h3>Contact Us</h3>
            <p>Email: info@rovecocktails.com</p>
            <p>Phone: +971 4 123 4567</p>
           </div>
           <div>
            <h3>Open Every Day</h3>
            {openingHours.map((time) => (
              <p key={time.day}>{time.day}: {time.time}</p>
            ))}
           </div>
           <div>
            <h3>Follow Us</h3>
           <div className="flex-center gap-5">
            {socials.map((social) => (
              <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">
                <img src={social.icon} alt={social.name} className="w-5 h-5" />
              </a>
            ))}
            </div>
           </div>
        </div>
    </footer>
  )
}

export default Contact