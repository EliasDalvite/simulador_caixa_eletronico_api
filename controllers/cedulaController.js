const { getCedulasDB, updateCedulasDB } = require('../usecases/cedulaUseCases');

const getCedulas = async (request, response) => {
    await getCedulasDB()
        .then(data => response.status(200).json(data))
        .catch(err => response.status(400).json({
            status: 'error',
            message: 'Erro ao conultar as cedulas: ' + err
        }))
};


const updateCedulas = async (request, response) => {
    await updateCedulasDB(request.body)
        .then(data => response.status(200).json({
            status: "success", message: "Quantia de cedulas alterada",
            objeto: data
        }))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));
}


module.exports = { getCedulas, updateCedulas }
