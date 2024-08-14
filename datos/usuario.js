var a = [
	{
		"identificador" : "cristhian",
		"clave" : "gonzales",
		"escenarios" : [
			"507b3807e49eb5d12406176c",
			"507b3807e49eb5d12406176d",
			"507b3807e49eb5d12406176e",
			"507b3807e49eb5d12406176f",
			"509496d10f3751f25e000001",
			"50949ae00f3751f25e000002",
			"50949c3d0f3751f25e000003",
			"50949d6b0f3751f25e000004",
		],
		"_id" : ObjectId("507b3808e49eb5d124061770")
	},
	{
		"_id" : ObjectId("507b3808e49eb5d124061771"),
		"identificador" : "angel",
		"clave" : "gonzales",
		"escenarios" : [
			"507b3807e49eb5d12406176c"
		]
	}
]
for (var i in a) db.usuario.insert(a[i])
