import React from "react"
//import { Link } from "gatsby"
//import { Search } from 'styled-icons/feather'
import Layout from "../layouts/layout"
import Image from "../gatsby-components/image"
import SEO from "../gatsby-components/seo"

/* USE LATER
import { Button, IconButton, Section } from "../components/Element"
    <Section flex justifyContent="space-evenly" m={2}>
      <Link to="/page-2/">Go to page 2</Link>
      <Button variant="primary">My Custom Button!</Button>
      <IconButton icon={<Search />} />
    </Section>
*/

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi People</h1>
    <p>I changed some stuff!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>
    Bacon ipsum dolor amet ball tip ground round picanha shank, pork chop prosciutto ham shoulder. Picanha ball tip boudin ground round. Meatball beef ribs swine ball tip, pig spare ribs corned beef fatback meatloaf. Meatball shank ground round buffalo pork belly tongue flank, alcatra filet mignon sirloin. Boudin doner ground round chicken tenderloin jowl, shoulder pastrami shank flank. Rump picanha jowl venison swine bresaola hamburger bacon. Kielbasa spare ribs pork belly picanha brisket salami.
    </p>

    <p>
    Sausage alcatra pork belly meatloaf ball tip doner picanha bacon. Turkey ham ribeye, shankle landjaeger pork porchetta sirloin. Strip steak shoulder ribeye tenderloin picanha. Doner sausage tail brisket, porchetta venison tri-tip. Spare ribs buffalo tri-tip pork chop corned beef short loin venison kevin meatloaf pastrami frankfurter. Pork loin beef landjaeger filet mignon meatloaf ham hock leberkas short loin boudin corned beef tri-tip.
    </p>

    <p>
    Venison shankle kevin pig, ribeye prosciutto brisket sausage turducken tail fatback filet mignon jerky spare ribs. Salami ham drumstick prosciutto cupim pork loin brisket rump tongue andouille t-bone leberkas turducken bacon. Meatball drumstick rump prosciutto, chuck leberkas kielbasa filet mignon beef strip steak brisket sirloin buffalo pastrami. Capicola doner andouille tongue strip steak cow bacon kielbasa pork jerky short loin bresaola swine rump ball tip. Kielbasa t-bone hamburger pork belly fatback. Chuck flank bresaola pancetta.
    </p>

    <p>
    Filet mignon pork loin pork chop pancetta boudin tenderloin shoulder doner leberkas picanha shankle jerky hamburger drumstick spare ribs. Leberkas andouille landjaeger, prosciutto turducken pancetta pig sirloin corned beef swine buffalo. Turkey pastrami frankfurter pork loin turducken. Tongue turkey shank venison pork loin beef ham pork shoulder bacon kevin doner alcatra meatloaf. Chicken fatback shankle, jerky tail jowl turducken ribeye prosciutto cupim short ribs. Shankle landjaeger pork tail beef, prosciutto buffalo pig doner drumstick.
    </p>

    <p>
    T-bone prosciutto ground round frankfurter burgdoggen salami rump spare ribs brisket pork loin. Short ribs rump bresaola cow sausage jerky chuck spare ribs venison fatback shank kielbasa short loin. Kevin leberkas hamburger corned beef tail biltong. Meatloaf tail picanha landjaeger drumstick tongue filet mignon swine salami chuck tri-tip. Shoulder t-bone meatball kielbasa, ground round spare ribs pig meatloaf sirloin. Short loin meatloaf ribeye chuck, chicken short ribs ball tip.
    </p>
  </Layout>
)

export default IndexPage
