import Services from "@/components/services"

export default function services() {
  return (
    <div>
      <section className="servicesWrapper | -mt-20 ~mt-28p pt-28 lg:px-12">
        <Services />
        <iframe
          width="100%"
          scrolling="no"
          className="
            h-[940px] 
            max-[320px]:h-[720px]
            min-[321px]:h-[800px]
            min-[384px]:h-[900px]
            md:h-[700px]
            lg:rounded-3xl 
            md:mt-10
            bg-gradient-to-r from-primary to-[#F0A91A]
          "
          src="https://bento.me/octoreach"
          title="Octoreach services"
        />
      </section>
    </div>
  )
}