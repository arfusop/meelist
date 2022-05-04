const Dashboard = () => {
    return <div>Dashboard</div>
}

export async function getStaticProps() {
    return {
        props: {
            protected: true
        }
    }
}

export default Dashboard
