import styled from "styled-components";

const LoadingTable = styled.tbody`
  display: block;
  width: 100%;
  tr {
    display: block;
    background-color: rgba(180, 180, 180, 0.2);
    background: linear-gradient(-90deg, white, #c9bebb, #c9bebb, white);
    background-size: 400% 400%;
    animation: gradient 5s ease infinite;
    border-radius: 4px;
    opacity: 0.6;

    width: 100%;

    td {
      background: linear-gradient(-45deg, #c9bebb, #776d6a, #776d6a, #c9bebb);
      background-size: 400% 400%;
      animation: gradient 2s ease infinite;
      color: transparent;
      opacity: 0.6;
      border-radius: 4px;
    }
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const TableLoading = () => {
  return (
    <LoadingTable>
      <tr>
        <td>Carregando...</td>
        <td>Carregando...</td>
        <td>Carregando...</td>
        <td>Carregando...</td>
      </tr>
      <tr>
        <td>Carregando...</td>
        <td>Carregando...</td>
        <td>Carregando...</td>
        <td>Carregando...</td>
      </tr>
      <tr>
        <td>Carregando...</td>
        <td>Carregando...</td>
        <td>Carregando...</td>
        <td>Carregando...</td>
      </tr>
      <tr>
        <td>Carregando...</td>
        <td>Carregando...</td>
        <td>Carregando...</td>
        <td>Carregando...</td>
      </tr>
    </LoadingTable>
  );
};

export default TableLoading;
