function Computer() {
    const teachers = [
        {
            name: "বুলবুল আহমেদ",
            podobi: "চিফ ইনস্ট্রাক্টর ও বিভাগীয় প্রধান (কম্পিউটার) ১ম শিফট",
            dprmt: "কম্পিউটার সাইন্স এন্ড টেকনোলজি",
            shift: "১ম শিফট",
            email: "bulbul.mpi@gmail.com",
            batch: "0",
            mobile: "০১৭১১৭৮৯২৭৬",
            img: "https://mpi.polytech.gov.bd/sites/default/files/files/mpi.polytech.gov.bd/teacher_list/7b14b473_e987_4367_82e5_e6dd77c8f061/2023-10-09-12-48-f6f2b489041f1d8d77b1b8bb2db2617c.PNG",
        },
        {
            name: "মোহাম্মদ হযরত আলী",
            podobi: "চিফ ইনস্ট্রাক্টর ও বিভাগীয় প্রধান(কম্পিউটার) ২য় শিফট",
            dprmt: "কম্পিউটার সাইন্স এন্ড টেকনোলজি",
            shift: "২য়শিফট",
            email: "mniloy@yahoo.com",
            batch: "0",
            mobile: "০১৭১২১১৮৩৭২",
            img: "https://mpi.polytech.gov.bd/sites/default/files/files/mpi.polytech.gov.bd/teacher_list/e590e61d_4e4f_4fd9_b82e_ed1b783d7d2f/2023-10-15-14-45-f94f0a22bd2e2240c208d3e0eba296b3.PNG",
        },
        {
            name: "ফাতেমা জোহুরা",
            podobi: "চিফ ইনস্ট্রাক্টর",
            dprmt: "কম্পিউটার সাইন্স এন্ড টেকনোলজি",
            shift: "১ম শিফট",
            email: "sompa.ruet98@gmail.com",
            batch: "0",
            mobile: "০১৭১২৬৬৭৯৫৭",
            img: "https://mpi.polytech.gov.bd/sites/default/files/files/mpi.polytech.gov.bd/teacher_list/794396c0_f0f5_479c_a0d0_315930387cec/2023-10-15-14-49-af186291f40da3e2d336901436a26a4a.PNG",
        },
        {
            name: "ফাওজিয়া আনিকা",
            podobi: "ইনস্ট্রাক্টর কম্পিউটার",
            dprmt: "কম্পিউটার সাইন্স এন্ড টেকনোলজি",
            shift: "১ম শিফট",
            email: "anikcse10@gmail.com",
            batch: "0",
            mobile: "01921220637",
            img: "https://mpi.polytech.gov.bd/sites/default/files/files/mpi.polytech.gov.bd/teacher_list/5814cace_e17a_4318_b2cc_9558db847d9d/2023-10-15-14-52-b756f6a13eb7b06771d93cc44b9ff9c1.PNG",
        },
        {
            name: "তোফায়েল আলম সিদ্দিকী",
            podobi: "ইনস্ট্রাক্টর কম্পিউটার",
            dprmt: "কম্পিউটার সাইন্স এন্ড টেকনোলজি",
            shift: "১ম শিফট",
            email: "tofaelalam91@gmail.com",
            batch: "0",
            mobile: "01718195615",
            img: "https://mpi.polytech.gov.bd/sites/default/files/files/mpi.polytech.gov.bd/teacher_list/9f438dd7_612d_40c6_96fe_41a9018c9877/2023-10-15-14-54-ef1b811049ba80171bd6742720922eda.PNG",
        },
        {
            name: "এস যুথী আল সাকী",
            podobi: "ইনস্ট্রাক্টর কম্পিউটার",
            dprmt: "কম্পিউটার সাইন্স এন্ড টেকনোলজি",
            shift: "১ম শিফট",
            email: "sjuthi12@gmail.com",
            batch: "0",
            mobile: "০১৯৯২০০৮২১৮",
            img: "https://mpi.polytech.gov.bd/sites/default/files/files/mpi.polytech.gov.bd/teacher_list/4fe59612_bb25_4dbf_9dd0_b831fe05f8ae/2023-10-15-14-56-3a7f731202bdbb72c2cdfbc36ee93a2f.PNG",
        },
        {
            name: "তন্ময় দেবনাথ",
            podobi: "ইনস্ট্রাক্টর কম্পিউটার",
            dprmt: "কম্পিউটার সাইন্স এন্ড টেকনোলজি",
            shift: "২য় শিফট",
            email: "tonmoy.mbd@gmail.com",
            batch: "৪০",
            mobile: "০১৭১৮৫৫১৮৭৫",
            img: "https://mpi.polytech.gov.bd/sites/default/files/files/mpi.polytech.gov.bd/teacher_list/58c0133d_b766_4b3a_b0c2_051923c109dd/2024-01-29-03-00-a6a7a6e8349cde093a44456de3ee6a65.jpeg",
        },
        {
            name: "মোঃ রিফাত আমিন",
            podobi: "ইনস্ট্রাক্টর কম্পিউটার",
            dprmt: "কম্পিউটার সাইন্স এন্ড টেকনোলজি",
            shift: "২য় শিফট",
            email: "refatamin1305@gmail.com",
            batch: "৪১",
            mobile: "০১৯৬৭৪০০১১৫",
            img: "https://mpi.polytech.gov.bd/sites/default/files/files/mpi.polytech.gov.bd/teacher_list/02fbdc3c_6c81_4972_8dd4_98e059a43c9e/2024-06-06-09-04-e990750689d3320f32a6f1209614915d.jpg",
        },
        {
            name: "ফৌজিয়া হক",
            podobi: "ইনস্ট্রাক্টর কম্পিউটার",
            dprmt: "কম্পিউটার সাইন্স এন্ড টেকনোলজি",
            shift: "২য় শিফট",
            email: "huque.fouzia863@gmail.com",
            batch: "0",
            mobile: "০১৯৯২০০৮২২১",
            img: "https://mpi.polytech.gov.bd/sites/default/files/files/mpi.polytech.gov.bd/teacher_list/489250c9_fae0_4456_8093_cef7132a7935/2023-10-15-14-58-ed2c4000f8abef6b4d3579fd04253f0d.PNG",
        },
        {
            name: "মোঃ আব্দুল ওয়াদুদ",
            podobi: "খন্ডকালীন শিক্ষক",
            dprmt: "কম্পিউটার সাইন্স এন্ড টেকনোলজি",
            shift: "২য় শিফট",
            email: "pranthowadud@gmail.com",
            batch: "0",
            mobile: "০১৭০৯২১০২৩২",
            img: "https://mpi.polytech.gov.bd/sites/default/files/files/mpi.polytech.gov.bd/teacher_list/db080154_f9e6_4aa6_a595_83cc796bd9e3/2023-10-15-15-01-56f8424e434b37a5edaf14dd44b29d92.PNG",
        },
        {
            name: "উবায়দুল ইসলাম",
            podobi: "খন্ডকালীন শিক্ষক",
            dprmt: "কম্পিউটার সাইন্স এন্ড টেকনোলজি",
            shift: "২য় শিফট",
            email: "obydulmpi@gmail.com",
            batch: "0",
            mobile: "০১৯৫২৮০৫৪৯৮",
            img: "https://mpi.polytech.gov.bd/sites/default/files/files/mpi.polytech.gov.bd/teacher_list/2d080551_4fb9_4090_bdd3_2cb2e354b935/2023-10-15-15-03-7a0742fce2a15b4b2f094548c6356cea.PNG",
        },
    ]

    console.log(teachers);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">

            {teachers.map((teacher, index) => (
                <div key={index} className="card bg-base-100  shadow-xl">
                    <figure>
                        <img className="h-24 lg:h-5/6 rounded rounded-xl" src={teacher.img} />
                    </figure>
                    <div className="card-body">
                        <h2 className="font-bold"> নাম : {teacher.name}</h2>
                        <h3>পদবি : {teacher.podobi}</h3>
                        <h3>অনুষদ : {teacher.dprmt}</h3>
                        <h3>বিভাগ : {teacher.shift}</h3>
                        <h3>ই-মেইল : {teacher.email}</h3>
                        <h3>ব্যাচ (বিসিএস) : {teacher.batch}</h3>
                        <h3>মোবাইল : {teacher.mobile}</h3>
                    </div>
                </div>
            ))}
        </div >
    )
}

export default Computer
