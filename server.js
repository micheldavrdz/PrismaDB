const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// CORS
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:8081',
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

// Explorer TABLE Endpoints
app.get('/explorers', async (req, res) => {
    const allExplorers =  await prisma.explorer.findMany({});
    res.json(allExplorers);
});

app.get('/explorers/:id', async (req, res) => {
    const id = req.params.id;
    const explorer = await prisma.explorer.findUnique({where: {id: parseInt(id)}});
    res.json(explorer);
});

app.post('/explorers', async (req, res) => {
    const explorer = {
      name: req.body.name,
      username: req.body.username,
      mission: req.body.mission
     };
    const message = 'Explorer creado.';
    await prisma.explorer.create({data: explorer});
    return res.json({message});
});

app.put('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.explorer.update({
		where: {
			id: id
		},
		data: {
			mission: req.body.mission
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

app.delete('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.explorer.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});

// Explorer_2 TABLE Endpoints
app.get('/explorers2', async (req, res) => {
    const allExplorers =  await prisma.explorer_2.findMany({});
    res.json(allExplorers);
});

app.get('/explorers2/:id', async (req, res) => {
    const id = req.params.id;
    const explorer = await prisma.explorer_2.findUnique({where: {id: parseInt(id)}});
    res.json(explorer);
});

app.post('/explorers2', async (req, res) => {
    const explorer = {
      name: req.body.name,
      lang: req.body.lang,
      missionCommander: req.body.missionCommander,
      enrollments: req.body.enrollments,
      hasCertifications: req.body.hasCertifications
     };
    const message = 'Explorer creado.';
    await prisma.explorer_2.create({data: explorer});
    return res.json({message});
});

app.put('/explorers2/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.explorer_2.update({
		where: {
			id: id
		},
		data: {
			hasCertifications: req.body.hasCertifications
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

app.delete('/explorers2/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.explorer_2.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});

// MissionCommander TABLE Endpoints
app.get('/commanders', async (req, res) => {
    const allCommanders =  await prisma.missionCommander.findMany({});
    res.json(allCommanders);
});

app.get('/commanders/:id', async (req, res) => {
    const id = req.params.id;
    const commander = await prisma.missionCommander.findUnique({where: {id: parseInt(id)}});
    res.json(commander);
});

app.post('/commanders', async (req, res) => {
    const commander = {
      name: req.body.name,
      username: req.body.username,
      mainStack: req.body.mainStack,
      currentEnrollment: req.body.currentEnrollment,
      hasAzureCertification: req.body.hasAzureCertification
     };
    const message = 'Explorer creado.';
    await prisma.missionCommander.create({data: commander});
    return res.json({message});
});

app.put('/commanders/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.missionCommander.update({
		where: {
			id: id
		},
		data: {
			mainStack: req.body.mainStack
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

app.delete('/commanders/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.missionCommander.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});