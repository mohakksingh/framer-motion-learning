import React from "react";
import { motion, useScroll } from "motion/react";

const App = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="p-20 text-center text-white font-mono">
      <motion.div
        className="bg-red-500 origin-left  w-full h-3 fixed top-0 left-0"
        style={{
          scaleX: scrollYProgress,
        }}
      ></motion.div>
      <h2 className="text-4xl font-bold mb-8">Sheriyans Coding School</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aperiam
        neque eum repudiandae maxime dignissimos ipsam adipisci facilis beatae
        minima cumque aut quod tenetur reiciendis ullam assumenda, ab
        consectetur animi officiis dolore sed consequatur pariatur dicta ut.
        Repudiandae odio impedit dolore mollitia repellat ad provident alias
        temporibus, veniam labore eius ipsam voluptate nisi ut ab aliquid
        commodi neque nihil quae minus in earum, quibusdam explicabo
        consequuntur. Fugiat sunt quod est voluptates debitis tempore, beatae
        dolor eius vitae rerum. Corrupti debitis dolor dolore deserunt ipsum
        iure tenetur ex voluptatum assumenda voluptatem in nulla tempora velit
        tempore, nostrum modi porro? Esse, dolorum. <br /> <br />
        <br />
        <br />
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
        aliquam tempora repudiandae asperiores sit est nam accusantium autem
        adipisci vero, aperiam obcaecati. Animi, ea repellat? Ab quibusdam harum
        animi voluptates et, autem rem debitis? Nemo exercitationem consectetur
        illum libero eaque modi repudiandae fuga voluptatum quis ducimus,
        aperiam recusandae voluptatem quod maxime! Dicta iste accusantium alias
        ullam dolorem voluptates dolorum? Perspiciatis ex omnis nisi veniam quo
        voluptates eius neque, ea dolores porro facilis praesentium architecto
        aliquam dignissimos quod odio dolor laboriosam sequi sapiente saepe.
        Quasi laborum perferendis debitis quam consequatur unde odio quos
        inventore necessitatibus voluptas obcaecati, aperiam quisquam natus
        sapiente nobis corrupti, quibusdam doloremque? Qui atque molestiae
        soluta modi minima, facere corrupti. Necessitatibus nesciunt voluptas
        possimus exercitationem. Totam et quis fuga laudantium facilis explicabo
        accusantium ipsum voluptate. Sequi tempora quod eaque perspiciatis unde
        sint architecto esse incidunt vitae similique vero laudantium accusamus
        tempore nemo excepturi, ratione doloribus voluptate dolor veritatis.
        Dolorum ullam voluptas harum culpa! Deserunt, est ipsa! Tempora
        molestiae officia eligendi non dolore, quidem esse fugiat rerum possimus
        enim quibusdam at dicta impedit quod. A ipsum qui dolore illum optio
        itaque quidem sunt eaque eius. Odio tempore culpa magnam doloremque.
        Doloremque error optio fuga ipsa aperiam maiores quam repellat.
        <br />
        <br />
        <br />
        <br />
        <br />
        <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        iusto vel facere cupiditate fuga, et id! Facere repellendus, iure
        distinctio dicta rerum odio temporibus, atque, quos officiis incidunt
        laborum! Impedit expedita adipisci illum excepturi, atque quas quidem
        voluptates quisquam accusantium. Deleniti dignissimos vel modi
        praesentium, a explicabo debitis ab numquam dolorum tenetur perferendis
        eaque vitae, nihil quia vero accusamus unde doloribus soluta velit harum
        ullam pariatur corrupti, quibusdam hic? Ipsam, labore! Tempora tenetur
        rem quis fugiat deleniti consequuntur aspernatur reiciendis doloribus
        quo ea vitae voluptatum consequatur et ullam minus consectetur adipisci,
        quos, earum, eaque dolorem laborum magnam fugit? Consequatur molestias,
        ipsa omnis eum magni eaque vero in quia mollitia commodi excepturi
        sapiente, inventore reprehenderit perferendis quasi quisquam doloremque
        laborum! Illo possimus repellat recusandae beatae. Deleniti, fugit in?
        Fugit, quos porro quo blanditiis temporibus nam error velit dolore,
        tempora quas recusandae. Nisi obcaecati ipsum provident ratione
        exercitationem? Similique modi est, voluptatem rem pariatur praesentium
        deserunt vitae aut dignissimos ipsum, quod tenetur deleniti laborum
        autem doloribus. Nesciunt doloremque voluptates eaque tempore itaque
        voluptatum maxime omnis, voluptate obcaecati, nulla quas exercitationem,
        quam magni dicta accusamus earum? Nostrum, quo culpa dolores aliquam
        fugiat repellat in officiis eligendi nisi cumque enim magnam repellendus
        unde quas.
      </p>
    </div>
  );
};

export default App;
