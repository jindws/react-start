import DBF from './dbFactory'

export default DBF.context;

DBF.create('TEST', {
    test:{
        url       : '/monthlyReport',
        type      : 'POST'
    },
});
