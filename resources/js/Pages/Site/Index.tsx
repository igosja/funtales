import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MainLayout from '@/Layouts/MainLayout';
import {PageProps} from "@/types";

export default function Index({auth, articles}: PageProps) {
    return (
        <MainLayout
            user={auth.user}
        >
            <Row xs={1} sm={1} md={1} lg={1} xl={1} xxl={1} className="g-4">
                {articles.map(({created_at, created_by, rating, slug, title, text, views}, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Header>
                                <Card.Link href={route('article.show', {slug: slug})}>
                                    {title}
                                </Card.Link>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {text}
                                </Card.Text>
                                <Card.Text>
                                    Created by: {created_by}
                                </Card.Text>
                                <Card.Text>
                                    Created at: {created_at}
                                </Card.Text>
                                <Card.Text>
                                    Rating: {rating}
                                </Card.Text>
                                <Card.Text>
                                    Views: {views}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </MainLayout>
    );
}
