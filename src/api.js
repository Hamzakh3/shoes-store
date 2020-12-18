const ShoesList = () => {
	const shoesData = {
		men:[
			{
				"name": "Air Jordan XXXV Sisterhood",
				id:'Air-Jordan-XXXV-Sisterhood',
				price:180,
				url:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7b6c54be-b1b5-4219-b3a2-cec8d2374621/air-jordan-xxxv-sisterhood-basketball-shoe-Z5q0s3.jpg'
			},
			{
				"name":"Air Jordan 1 Mid SE",
				id:'Air-Jordan-1-Mid-SE',
				price:125,
				url:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7f80811a-20f6-4c70-8177-50398e8fee40/air-jordan-1-mid-se-mens-shoe-GR4N79.jpg"
			},
			{
				"name":"Nike Air Zoom Tempo NEXT",
				id:'NikeAir-Zoom-Tempo-NEXT',
				price:200,
				url:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/baa6afa0-7b40-46ac-8e79-0ed0beecdbf1/air-zoom-tempo-next-mens-running-shoe-Jp0gJk.jpg"
			},
			
			{
				"name":"Nike Air Max 90 Premium",
				id:'Nike-Air-Max-90-Premium',
				price:160,
				url:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/67544956-5bbb-40a2-ae14-f9b5784f89dc/air-max-90-premium-mens-shoe-5qp5cM.jpg"
			},
			
			{
				"name":"Nike Air Force 1 '07",
				id:'Nike-Air-Force-1-"07"',
				price:90,
				url:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-mens-shoe-5QFp5Z.jpg"
			},
			
			{
				"name":"Nike Air Force 1 GTX Boot",
				id:'Nike-Air-Force-1-GTX-Boot',
				price:180,
				url:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2456ce8d-7223-4e0a-83f6-c5559a228f0c/air-force-1-gtx-boot-boot-vtm6QP.jpg"
			}
		],
		women:[
			{
				"name":"Nike Air Force 1 Crater",
				id:'Nike-Air-Force-1-Crater',
				price:110,
				url:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/bcbacb2e-d39b-48ac-abf7-8b2dc597077d/air-force-1-crater-womens-shoe-28NwmB.jpg"
			},
			{
				"name":"Nike Pegasus Trail 2 GORE-TEX",
				id:'Nike-Pegasus-Trail-2-GORE-TEX',
				price:160,
				url:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/17abee4e-f42c-49bf-b190-dbb50eae6147/pegasus-trail-2-gore-tex-womens-trail-running-shoe-lhj8Xd.jpg"
			},
			{
				"name":"Nike Air Max 90 Premium Edition",
				id:'Nike-Air-Max-90-Premium-Edition',
				price:130,
				url:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/37ee3587-87a3-4026-aaba-3dac1cf8e0ea/air-max-90-premium-womens-shoe-F2W2MJ.jpg"
			},
			{
				"name":"Nike Air Force 1 Shadow",
				id:'Nike-Air-Force-1-Shadow',
				price:110,
				url:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/dd2c1f63-133f-4de0-8997-c260ea0a6570/air-force-1-shadow-womens-shoe-kTgn9J.jpg"
			},
			{
				"name":"Nike Air Max Up",
				id:'Nike-Air-Max-Up',
				price:130,
				url:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c00c5d7b-2b33-48b2-a90b-272fcc43555b/air-max-up-womens-shoe-bL7qtj.jpg"
			},
			{
				"name":"Nike TC 7900 LX 3M",
				id:'Nike-TC-7900-LX-3M',
				price:120,
				url:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c83f5873-ac3d-4306-9cf5-ceda2c9bba45/tc-7900-lx-3m%E2%84%A2-womens-shoe-SgrkqS.jpg"
			}
	
		],
		kid:[
			{
				"name":"Nike Air Max 270",
				id:'Nike-Air-Max-270',
				price:120,
				url:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e6612c0b-7a9d-4dd4-87b3-4cfea47c6284/air-max-270-big-kids-shoe-HbtNX3.jpg"
			},
			{
				"name":"Nike Air Force 1 '07 LV8",
				id:'Nike-Air-Force-1-"07-LV8"',
				price:90,
				url:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/aed5eede-d328-4331-8874-7e7fabffc094/air-force-1-07-lv8-big-kids-shoe-ZlMN5r.jpg"
			},
			{
				"name":"LeBron 18",
				id:'LeBron-18',
				price:160,
				url:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/dcdfe328-5784-4a2e-a27a-0b821a791934/lebron-18-big-kids-basketball-shoe-3VWSb0.jpg"
			},
			{
				"name":"Kyrie 7",
				id:'Kyrie-7',
				price:110,
				url:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ebdc9814-c60c-4b61-8177-30a8ac1d062b/kyrie-7-big-kids-basketball-shoe-1bNT7m.jpg"
			},
			{
				"name":"Kyrie 7 Black",
				id:'Kyrie-7-Black',
				price:55,
				url:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d5f486d4-3aeb-4e61-913e-eeb77bcadaac/kyrie-7-baby-toddler-shoe-XCCX5h.jpg"
			},
			{
				"name":"Nike Blazer Mid",
				id:'Nike-Blazer-Mid',
				price:90,
				url:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d6495fc0-97a7-4f10-8f36-1e3f0f0dbac1/blazer-mid-big-kids-shoe-4VfSTd.jpg"
			}
		]
	}
	return shoesData
}




export default ShoesList