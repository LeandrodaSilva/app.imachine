import Page from "../../components/page";
import Layout from "../../components/layout";
import styled from "styled-components";
import {useEffect, useState} from "react";
import CompanyCard from "../../components/companyCard";
import {Factory} from "../api/factory/list";

const Content = styled.div`
  height: auto;
  display: block;
`

async function loadFactory() {
  const res = await fetch(`/api/factory/list`)
  return await res.json();
}

function Empresas(props) {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [factorys, setFactorys] = useState([]);

  const loadingCards = (
    <>
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
    </>
  )

  useEffect(() => {
    setMounted(true);
  })

  useEffect(() => {
    loadFactory()
      .then(resp => resp.results[0])
      .then(data => data.data)
      .then(fac => fac[0].factorys)
      .then(fac => setFactorys(fac))
  }, [mounted])

  useEffect(() => {
    setIsLoading(false)
  }, [factorys])

  return (
    <Layout>
      <Page title="Locais">
        <Content>
          {/*{*/}
          {/*  isLoading ? loadingCards :*/}
          {/*    <>*/}
          {/*      {factorys.map((row: Factory) =>*/}
          {/*        <CompanyCard*/}
          {/*          key={row.factory_id}*/}
          {/*          factory_image={row.factory_image}*/}
          {/*          factory_name={row.factory_name}*/}
          {/*        />*/}
          {/*      )}*/}
          {/*    </>*/}
          {/*}*/}
        </Content>
      </Page>
    </Layout>
  )
}

export default Empresas
