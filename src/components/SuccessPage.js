import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function SuccessPage() {
    return (
        <Container>
            <Card style={marginAuto}>
                <Card.Body>
                    <h1>Terima Kasih Sudah Mendaftar</h1>
                </Card.Body>
            </Card>
        </Container>
    );
}

// Style
let marginAuto = {
    maxWidth: '800px',
    margin: '1rem auto'
}

export default SuccessPage;