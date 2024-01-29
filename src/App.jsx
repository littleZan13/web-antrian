import { useState } from 'react'
import {
  Typography,
  Col,
  Row,
  Flex,
  Card,
  Button,
  ConfigProvider,
  Modal,
  Form,
  Select,
  Input,
} from 'antd'

const { Text } = Typography

function App() {
  const [open, setOpen] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const showModal = () => {
    setOpen(true)
  }
  const handleOk = () => {
    setConfirmLoading(true)
    setTimeout(() => {
      setOpen(false)
      setConfirmLoading(false)
    }, 2000)
  }
  const handleCancel = () => {
    setOpen(false)
  }

  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <>
      <p style={{ textAlign: 'center', fontSize: '1.2em', fontWeight: '600' }}>
        Silahkan Pilih No Antrian Anda
      </p>

      <Row style={{ marginTop: '1em', paddingInline: '1em' }}>
        <Col span={16} style={{ paddingRight: '1.5em' }}>
          <Flex align="center">
            <Text strong style={{ color: 'darkCyan', whiteSpace: 'nowrap' }}>
              Sesi 1
            </Text>
            <div
              style={{
                width: '100%',
                height: '0.2em',
                backgroundColor: 'darkcyan',
                marginLeft: '0.5em',
              }}
            ></div>
          </Flex>
          <Row gutter={[35, 25]} style={{ marginTop: '1em' }}>
            <Col span={3}>
              <Flex
                align="center"
                justify="center"
                vertical
                style={{
                  backgroundColor: '#b8b8b8',
                  boxShadow: '0 2px 10px 1px rgba(92, 85, 85, 0.2)',
                  borderRadius: '0.5em',
                  paddingBlock: '1em',
                }}
              >
                <p style={{ margin: '0', fontWeight: '700', fontSize: '2em' }}>
                  01
                </p>
                <p style={{ margin: '0', fontWeight: '400' }}>08:00</p>
              </Flex>
            </Col>
          </Row>
          <Flex align="center" style={{ marginTop: '1em' }}>
            <Text strong style={{ color: 'darkCyan', whiteSpace: 'nowrap' }}>
              Sesi 2
            </Text>
            <div
              style={{
                width: '100%',
                height: '0.2em',
                backgroundColor: 'darkcyan',
                marginLeft: '0.5em',
              }}
            ></div>
          </Flex>
          <Row gutter={[35, 25]} style={{ marginTop: '1em' }}>
            <Col span={3}>
              <Flex
                align="center"
                justify="center"
                vertical
                style={{
                  backgroundColor: '#b8b8b8',
                  boxShadow: '0 2px 10px 1px rgba(92, 85, 85, 0.2)',
                  borderRadius: '0.5em',
                  paddingBlock: '1em',
                }}
              >
                <p style={{ margin: '0', fontWeight: '700', fontSize: '2em' }}>
                  01
                </p>
                <p style={{ margin: '0', fontWeight: '400' }}>08:00</p>
              </Flex>
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row style={{ color: 'red', marginBottom: '1em' }}>
            <Col span={7}>Waktu</Col>
            <Col span={1}>:</Col>
            <Col span={8}>05:00</Col>
          </Row>
          <Row style={{ marginBottom: '1em' }}>
            <Col span={7}>Nama</Col>
            <Col span={1}>:</Col>
            <Col span={8}>Fawaz</Col>
          </Row>
          <Row style={{ marginBottom: '1em' }}>
            <Col span={7}>Poli</Col>
            <Col span={1}>:</Col>
            <Col span={8}>Poli Umum</Col>
          </Row>
          <Row style={{ marginBottom: '1em' }}>
            <Col span={7}>Dokter</Col>
            <Col span={1}>:</Col>
            <Col span={8}>Kamar 2 | dr. shinta</Col>
          </Row>
          <Row style={{ marginBottom: '1em' }}>
            <Col span={7}>No. Handphone</Col>
            <Col span={1}>:</Col>
            <Col span={8}>080000000</Col>
          </Row>
          <Row style={{ marginBottom: '1em' }}>
            <Col span={7}>No. Antrian</Col>
            <Col span={1}>:</Col>
            <Col span={8} style={{ color: 'darkCyan' }}>
              40
            </Col>
          </Row>
          <Flex align="center" style={{ marginTop: '3em' }}>
            <Text
              italic
              strong
              style={{ color: 'darkCyan', whiteSpace: 'nowrap' }}
            >
              Status Antrian
            </Text>
            <div
              style={{
                width: '100%',
                height: '0.2em',
                backgroundColor: 'darkcyan',
                marginLeft: '0.5em',
              }}
            ></div>
          </Flex>
          <Flex align="center" gap="15px" style={{ marginTop: '1.5em' }}>
            <Card
              style={{
                backgroundColor: 'white',
                boxShadow: '0 2px 10px 1px rgba(92, 85, 85, 0.2)',
              }}
            ></Card>
            <Text strong>Tersedia</Text>
          </Flex>
          <Flex align="center" gap="15px" style={{ marginTop: '1.5em' }}>
            <Card
              style={{
                backgroundColor: 'darkcyan',
                boxShadow: '0 2px 10px 1px rgba(92, 85, 85, 0.2)',
              }}
            ></Card>
            <Text strong>Terpilih</Text>
          </Flex>
          <Flex align="center" gap="15px" style={{ marginTop: '1.5em' }}>
            <Card
              style={{
                backgroundColor: 'red',
                boxShadow: '0 2px 10px 1px rgba(92, 85, 85, 0.2)',
              }}
            ></Card>
            <Text strong>Batal</Text>
          </Flex>
          <Flex align="center" gap="15px" style={{ marginTop: '1.5em' }}>
            <Card
              style={{
                backgroundColor: 'gray',
                boxShadow: '0 2px 10px 1px rgba(92, 85, 85, 0.2)',
              }}
            ></Card>
            <Text strong>Tidak Tersedia</Text>
          </Flex>
          <Flex gap="1em" style={{ marginTop: '5em' }}>
            <ConfigProvider
              theme={{
                components: {
                  Button: {
                    defaultBg: '#F7F7F7',
                    defaultShadow: '0',
                    defaultBorderColor: 'none',
                    fontWeight: '600',
                  },
                },
              }}
            >
              <Button
                size="large"
                style={{
                  color: '#E38800',
                  textAlign: 'center',
                  width: '100%',
                  height: '3em',
                }}
              >
                Batal
              </Button>
            </ConfigProvider>
            <ConfigProvider
              theme={{
                components: {
                  Button: {
                    defaultBg: '#E38800',
                    defaultShadow: '0',
                    fontWeight: '600',
                  },
                },
              }}
            >
              <Button
                type="default"
                size="large"
                onClick={showModal}
                style={{
                  color: 'white',
                  textAlign: 'center',
                  width: '100%',
                  height: '3em',
                }}
              >
                Daftar
              </Button>
            </ConfigProvider>
          </Flex>
        </Col>
      </Row>
      <Modal
        title="Daftarkan Antrian"
        open={open}
        onCancel={handleCancel}
        footer={[]}
      >
        <Form
          onFinish={handleOk}
          onFinishFailed={onFinishFailed}
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item
            name="username"
            label="Nama Lengkap"
            style={{
              width: '100%',
              marginTop: '2em',
            }}
            rules={[
              {
                required: true,
                message: 'Tidak boleh kosong!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="select"
            label="Poli"
            style={{
              width: '100%',
            }}
            rules={[
              {
                required: true,
                message: 'Tidak boleh kosong!',
              },
            ]}
          >
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="doctor"
            label="Dokter"
            style={{
              width: '100%',
            }}
            rules={[
              {
                required: true,
                message: 'Tidak boleh kosong!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="No. Handphone"
            style={{
              width: '100%',
            }}
            rules={[
              {
                required: true,
                message: 'Tidak boleh kosong!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Flex gap="1em" style={{ marginTop: '1em' }} key="test">
              <ConfigProvider
                theme={{
                  components: {
                    Button: {
                      defaultBg: '#F7F7F7',
                      defaultShadow: '0',
                      defaultBorderColor: 'none',
                      fontWeight: '600',
                    },
                  },
                }}
              >
                <Button
                  key="back"
                  size="large"
                  onClick={handleCancel}
                  style={{
                    color: '#E38800',
                    textAlign: 'center',
                    width: '100%',
                    height: '3em',
                  }}
                >
                  Batal
                </Button>
              </ConfigProvider>
              <ConfigProvider
                theme={{
                  components: {
                    Button: {
                      defaultBg: '#E38800',
                      defaultShadow: '0',
                      fontWeight: '600',
                    },
                  },
                }}
              >
                <Button
                  type="default"
                  size="large"
                  htmlType="submit"
                  loading={confirmLoading}
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    width: '100%',
                    height: '3em',
                  }}
                >
                  Simpan
                </Button>
              </ConfigProvider>
            </Flex>
            ,
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default App
