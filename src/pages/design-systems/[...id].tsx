import { BlitzPage } from "@blitzjs/next"
import {
  Container,
  Grid,
  Title,
  Tabs as MantineTabs,
  Tooltip,
  Box,
  useMantineTheme,
  Text,
} from "@mantine/core"
import { IconLock } from "@tabler/icons-react"
import Tabs from "src/core/components/molecules/Tabs"
import Layout from "src/core/layouts/Layout"
import Wrapper from "src/design-system/Wrapper"

const DesignSystemPage: BlitzPage = () => {
  const theme = useMantineTheme()
  return (
    <Layout title="Vercel">
      <Container pt="xl" size="xl">
        <Grid gutter="xl">
          <Grid.Col span={8}>
            <Wrapper>
              <Title order={1}>Geist by Vercel</Title>
              <Tabs pos="sticky" top={0} py={theme.spacing.md} bg={theme.white}>
                <MantineTabs.List>
                  <MantineTabs.Tab value="preview">Превью</MantineTabs.Tab>
                  <MantineTabs.Tab value="components">Компоненты</MantineTabs.Tab>
                  <Tooltip label="Необходимо приобрести дизайн-систему">
                    <MantineTabs.Tab
                      disabled
                      value="usage"
                      icon={<IconLock size={20} stroke={1} />}
                    >
                      Использование
                    </MantineTabs.Tab>
                  </Tooltip>
                </MantineTabs.List>
                <MantineTabs.Panel value="components" mt="md">
                  <Tabs>
                    <MantineTabs.List>
                      <MantineTabs.Tab value="tokens">Токены</MantineTabs.Tab>
                      <MantineTabs.Tab value="atoms">Атомы</MantineTabs.Tab>
                      <MantineTabs.Tab value="molecules">Молекулы</MantineTabs.Tab>
                    </MantineTabs.List>
                  </Tabs>
                </MantineTabs.Panel>
              </Tabs>
              <Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus animi velit ipsa
                ducimus soluta, aut pariatur. Soluta, voluptatibus maiores nam blanditiis tenetur
                mollitia ducimus iste molestias consequuntur quos eius labore reiciendis tempora
                eligendi harum aperiam corrupti, impedit vitae iure est sint illo, quam doloremque
                ipsum? Molestiae doloremque eos error voluptate veritatis modi perferendis earum
                deserunt voluptates sit, fugit, quae, pariatur exercitationem odit repudiandae
                corrupti sequi quas sint iste eaque quisquam! Sequi excepturi quasi praesentium,
                nisi voluptate incidunt illo doloremque quas in libero, qui vel dicta deleniti
                laboriosam temporibus quos facere voluptatibus, hic rem vero doloribus neque!
                Repellendus quibusdam ipsum veniam nesciunt in aliquam provident, natus blanditiis
                eveniet doloremque sit voluptatum magni quam quidem consequuntur, obcaecati quia
                officia aperiam vel quo nisi. Aperiam, at ratione. Labore, maxime quo illum vel
                cumque sequi necessitatibus debitis laudantium nihil temporibus? Cumque eligendi
                quam perspiciatis facilis, magni ut labore accusantium dicta blanditiis provident
                illum est, sunt iste. Rem minus corrupti quis ab debitis voluptatum adipisci nihil
                explicabo et voluptates molestias nisi dolorum voluptas, incidunt laboriosam
                nesciunt mollitia unde facere labore quas eum. Tempora quas qui consectetur iusto
                cumque eos quod cupiditate, error consequuntur architecto fugit voluptas assumenda
                voluptatem, excepturi numquam provident. Saepe magni, voluptas, molestias quod
                officia illum ratione, tempora quaerat recusandae libero a impedit reiciendis
                incidunt eum facere. Quibusdam labore quas tempora perspiciatis aperiam animi autem,
                atque maxime harum ullam. Iste sint commodi quam nulla architecto natus perferendis
                illo, minima placeat a incidunt reiciendis, unde illum amet tenetur aut fugiat
                aspernatur exercitationem nisi, facere suscipit beatae. Libero illum eum aliquam.
                Quidem asperiores, esse officiis aspernatur veritatis facilis minus doloremque a
                sint omnis at quia fugiat possimus recusandae rem iste, consequatur soluta velit
                ipsam ullam provident? Nobis non, voluptates molestiae suscipit quas natus
                doloremque in saepe tempora? Deleniti dicta delectus ducimus labore quibusdam vitae
                placeat? Quia aliquam maxime delectus earum suscipit, doloremque alias autem.
                Distinctio fugit sint quaerat magni, esse, veritatis recusandae facere, vitae nemo
                porro possimus ab quisquam. Nesciunt, voluptas? Dicta dolor natus itaque quia,
                magnam quaerat fugiat deserunt illo dolore delectus. Accusantium eius beatae quos.
                Quae, aliquam nihil? Facere harum, perferendis beatae odit magni voluptatibus iure
                eligendi officia doloribus eum repellat minus veniam suscipit earum consequatur
                explicabo aspernatur soluta id? Reprehenderit libero, quod quo nisi quis explicabo
                cupiditate optio rem sint beatae ducimus minima fuga perspiciatis itaque
                exercitationem neque. Expedita, ratione? Consequuntur quaerat eveniet repellendus in
                suscipit dolor, expedita eos ex dolorum distinctio aspernatur? Excepturi, provident
                dolore. Recusandae consequuntur doloribus dolore, iure eveniet placeat optio minima
                possimus molestiae assumenda, impedit quis cumque earum nemo nostrum est laudantium
                numquam! Ea inventore porro corporis fugiat nihil? Ipsam, illum doloremque nobis
                animi, eius consequuntur similique sed unde aspernatur rerum vero quasi, delectus
                repellendus? Commodi quasi assumenda natus, debitis autem sed, harum ut neque
                repellat, est ducimus odit repellendus praesentium incidunt eos vero quod
                consequuntur quisquam inventore. Vel fugit quia, perferendis similique dolorum
                quibusdam impedit natus voluptatum, placeat ipsum alias nostrum, voluptatem maxime
                repellendus neque reprehenderit ab ea. Nemo aspernatur aperiam eligendi maiores
                possimus molestias eveniet perspiciatis? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Consequuntur fugit corrupti praesentium, quam accusamus error
                rerum nobis sed quasi. Et beatae ipsa officia iure voluptate provident libero.
                Pariatur voluptate enim similique dignissimos repudiandae totam quis ad nam eaque
                delectus harum rem, quibusdam sapiente! Accusamus voluptatum iste officiis incidunt
                minima, enim distinctio tenetur aperiam neque molestias dolore dolor blanditiis
                necessitatibus voluptates vel consequatur ipsam recusandae. Porro, nesciunt neque
                quam possimus placeat facilis, unde quo nisi blanditiis optio error adipisci magnam
                consequatur fuga! Minus dicta in corrupti reprehenderit neque, quasi laborum quia
                consequatur aperiam sint! Culpa voluptatem voluptas a blanditiis ducimus iure quod
                excepturi cumque fugiat possimus deleniti dolorum vel nam, veritatis veniam sequi.
                Saepe, accusamus. Qui, error sunt corrupti ab cumque officia, repellat repudiandae
                suscipit nam at totam voluptate ducimus ipsa rem dolorem nisi id nesciunt
                repellendus aperiam voluptatem. Perferendis, quia! Consequatur ipsam officia nam
                quibusdam qui voluptatum, nulla iste sapiente, suscipit, quos quisquam laboriosam
                eius repellat! Expedita amet nisi fugit, natus inventore voluptate temporibus
                dolorum exercitationem, voluptatum consectetur eius fugiat aliquid! Provident, enim
                neque fugit eius reiciendis recusandae debitis dicta accusantium ipsa dignissimos
                iure unde numquam quam voluptatibus, sint, consequuntur dolorum tempora praesentium
                ad! Doloremque eveniet sint fugiat earum nisi?
              </Text>
            </Wrapper>
          </Grid.Col>
          <Grid.Col span={4}>
            <Wrapper pos="sticky" top={theme.spacing.md}>
              Описание
            </Wrapper>
          </Grid.Col>
        </Grid>
      </Container>
    </Layout>
  )
}

export default DesignSystemPage
