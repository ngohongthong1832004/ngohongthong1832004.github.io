export interface ProjectType {
    title: string;
    description: string;
    image: string;
    github?: string;
    demo?: string;
}

export interface ProjectInterfaceProps {
    data: ProjectType[];
}

export interface ImagesType {
    // Web Development
    cssImg: string;
    htmlImg: string;
    jsImg: string;
    reactImg: string;
    sassImg: string;
    tsImg: string;
    nodeImg: string;
    djangoImg: string;
    fastapiImg: string;

    // Data Engineering
    pyImg: string;
    javaImg: string;
    sparkImg: string;
    kafkaImg: string;
    airflowImg: string;
    dockerImg: string;

    // Databases
    mySqlImg: string;
    mongoImg: string;
    postgreImg: string;
    clickhouseImg: string;

    // AI/ML
    tensorflowImg: string;
    pytorchImg: string;
    huggingfaceImg: string;

    // Tools
    gitImg: string;
    linuxImg: string;
    sqlite: string;
} 