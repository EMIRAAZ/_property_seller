import { imageURL } from "../../../utils/axios";

export const tableHeader = [
  {
    field: 'id',
    headerName: 'ID',
    minWidth: 120,
    renderCell: params => {
      return <p className="id">{params.row.id}</p>;
    },
  },
  {
    field: 'title',
    headerName: 'Title',
    minWidth: 200,
    renderCell: params => {
      return (
        <>

          {/* <img src={} alt="" className="image" /> */}
          <img src={`${imageURL}/${params.row.images[0]}`} alt="" className="image" />

          <p>{params.row.title}</p>
        </>
      );
    },
  },
  { field: 'description', headerName: 'Description', minWidth: 400 },
  { field: 'price', headerName: 'Price' },
  {
    field: 'referenceNo',
    headerName: 'Reference Id',
    minWidth: 120,
    renderCell: params => {
      return <p className="id">{params.row.referenceNo}</p>;
    },
  },
  {
    field: 'updatedAt',
    headerName: 'Date',
    minWidth: 180,
    renderCell: params => {
      var date = new Date(params.row.updatedAt);
      // .toLocaleString(undefined, {
      //   timeZone: 'Asia/Kolkata',
      // });
      const options = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        hour: 'numeric',
        minute: 'numeric',
      };
      return (
        <p className="date">{date.toLocaleDateString('en-us', options)}</p>
      );
    },
  },
];
