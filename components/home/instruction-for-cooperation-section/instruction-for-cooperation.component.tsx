import classnames from "classnames";

import Marker from "@/common/components/marker/marker.component";

import styles from "./instruction-for-cooperation.module.scss";
import Image from "next/image";

const instructionSteps = [
  {
    icon: "/icons/eye.icon.svg",
    number: "1",
    header: "OBEJRZYJ PORTFOLIO",
    text: "sprawdź czy mój styl Ci odpowiada",
  },
  {
    icon: "/icons/mail.svg",
    number: "2",
    header: "NAPISZ DO MNIE",
    text: "z zapytaniem o termin i ofertę",
  },
  {
    icon: "/icons/calendar.svg",
    number: "3",
    header: "SPOTKAJMY SIĘ",
    text: "odpowiem wtedy na wszystkie pytania i ustalimy szczegóły",
  },
];

const InstructionForCooperationSection = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className='container'>
          <div className={styles.content}>
            <div className={styles.marker}>
              <Marker text='WSPÓŁPRACA' />
            </div>
            <h2 className={classnames("title", "text-center")}>
              JAK ROZPOCZĄĆ WSPÓŁPRACĘ?
            </h2>
            <div className={styles.instructionSteps}>
              {instructionSteps.map(step => (
                <div className={styles.step} key={step.number}>
                  <div className={styles.icon}>
                    <Image
                      key={step.icon}
                      src={step.icon}
                      alt='icon'
                      width='100'
                      height='100'
                    />
                  </div>
                  <h4 className={styles.name}>{step.header}</h4>
                  <span className={styles.text}>{step.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionForCooperationSection;