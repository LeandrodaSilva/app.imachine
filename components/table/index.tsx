import DataTable from 'react-data-table-component';
import styles from "./styles.module.scss";

const customStyles = {
  rows: {
    style: {
      minHeight: '72px', // override the row height
    }
  },
  headCells: {
    style: {
      paddingLeft: '8px', // override the cell padding for head cells
      paddingRight: '8px',
    },
  },
  cells: {
    style: {
      paddingLeft: '8px', // override the cell padding for data cells
      paddingRight: '8px',
    },
  },
};

function Table() {
  const data = [
    {
      id: 1,
      sensor: 'AV017-1',
      equipamento: 'Blower',
      area: 'Classica',
      unidade: 'Paulinia',
      previsao: '77.7',
      previstoem: '8/10/2020 5:01:05 AM',
    },
    {
      id: 2,
      sensor: 'AV017-1',
      equipamento: 'Blower',
      area: 'Classica',
      unidade: 'Paulinia',
      previsao: '77.7',
      previstoem: '8/10/2020 5:01:05 AM',
    }
  ];
  const columns = [
    {
      name: 'Sensor',
      selector: 'sensor',
      sortable: true,
    },
    {
      name: 'Equipamento',
      selector: 'equipamento',
      sortable: true,
      right: true,
    },
    {
      name: 'Área',
      selector: 'area',
      sortable: true,
      right: true,
    },
    {
      name: 'Unidade',
      selector: 'unidade',
      sortable: true,
      right: true,
    },
    {
      name: 'Previsão',
      selector: 'previsao',
      sortable: true,
      right: true,
    },
    {
      name: 'Previsto em',
      selector: 'previstoem',
      sortable: true,
      right: true,
    },
  ];
  return (
    <div className={styles.table}>
      <DataTable
        noHeader={true}
        columns={columns}
        customStyles={customStyles}
        data={data}
      />
    </div>
  )
}

export default Table
