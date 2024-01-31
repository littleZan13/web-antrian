import { useState, useEffect } from 'react'
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
import { sesi1, sesi2 } from './data'

const { Text } = Typography

function App() {
  const [open, setOpen] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [selectedAntrian, setSelectedAntrian] = useState(null)
  const [antrianData, setAntrianData] = useState(sesi1)
  const [loadings, setLoadings] = useState([])

  const showModal = () => {
    setOpen(true)
  }

  const handleCancel = () => {
    setOpen(false)
  }

  const handleAntrianClick = (antrian) => {
    setSelectedAntrian(antrian)
    console.log(selectedAntrian)
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const statusColors = {
    tersedia: '#FFF',
    terpilih: 'darkcyan',
    batal: 'red',
    default: '#B8B8B8',
  }

  const statusText = {
    tersedia: '#000',
    terpilih: '#FFF',
    batal: '#FFF',
    default: '#000',
  }

  const handleOk = (values) => {
    console.log('Form values:', values)

    setConfirmLoading(true)

    const updatedAntrianData = [...antrianData]

    const selectedAntrianIndex = updatedAntrianData.findIndex(
      (antrian) => antrian.number === selectedAntrian.number
    )

    console.log('Selected antrian index:', selectedAntrianIndex)

    updatedAntrianData[selectedAntrianIndex] = {
      ...selectedAntrian,
      name: values.username,
      poli: values.select,
      dokter: values.doctor,
      phone: values.phone,
      status: 'tidak tersedia',
    }

    console.log('Updated antrianData before storing:', updatedAntrianData)

    try {
      localStorage.setItem('antrianData', JSON.stringify(updatedAntrianData))
    } catch (error) {
      console.error('Error saving to localStorage:', error)
    }

    setAntrianData(updatedAntrianData)

    setTimeout(() => {
      setOpen(false)
      setConfirmLoading(false)
      window.location.reload()
    }, 1500)
  }

  const handleCancelAntrian = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings]
      newLoadings[index] = true
      return newLoadings
    })

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings]
        newLoadings[index] = false
        return newLoadings
      })
      const updatedAntrianData = [...antrianData]

      const selectedAntrianIndex = updatedAntrianData.findIndex(
        (antrian) => antrian.number === selectedAntrian.number
      )

      console.log('Selected antrian index:', selectedAntrianIndex)

      updatedAntrianData[selectedAntrianIndex] = {
        ...selectedAntrian,
        name: '',
        poli: '',
        dokter: '',
        phone: '',
        status: 'batal',
      }

      console.log('Updated antrianData before storing:', updatedAntrianData)

      try {
        localStorage.setItem('antrianData', JSON.stringify(updatedAntrianData))
      } catch (error) {
        console.error('Error saving to localStorage:', error)
      }

      setAntrianData(updatedAntrianData)

      window.location.reload()
    }, 1500)
  }

  useEffect(() => {
    const storedData = localStorage.getItem('antrianData')
    console.log('Stored data from localStorage:', storedData)

    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData)
        setAntrianData(parsedData)
      } catch (error) {
        console.error('Error parsing localStorage data:', error)
      }
    }
  }, [])

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
            {antrianData.map((antrian, index) => (
              <Col
                span={3}
                key={index}
                onClick={() => handleAntrianClick(antrian)}
              >
                <Flex
                  align="center"
                  justify="center"
                  vertical
                  style={{
                    backgroundColor:
                      statusColors[antrian.status] || statusColors['default'],
                    boxShadow: '0 2px 10px 1px rgba(92, 85, 85, 0.2)',
                    borderRadius: '0.5em',
                    paddingBlock: '1em',
                    cursor: 'pointer',
                  }}
                >
                  <p
                    style={{
                      margin: '0',
                      fontWeight: '700',
                      fontSize: '2em',
                      color:
                        statusText[antrian.status] || statusText['default'],
                    }}
                  >
                    {antrian.number}
                  </p>
                  <p
                    style={{
                      margin: '0',
                      fontWeight: '400',
                      color:
                        statusText[antrian.status] || statusText['default'],
                    }}
                  >
                    {antrian.time}
                  </p>
                </Flex>
              </Col>
            ))}
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
          {selectedAntrian ? (
            <>
              <Row style={{ color: 'red', marginBottom: '1em' }}>
                <Col span={7}>Waktu</Col>
                <Col span={1}>:</Col>
                <Col span={8}>{selectedAntrian.time}</Col>
              </Row>
              <Row style={{ marginBottom: '1em' }}>
                <Col span={7}>Nama</Col>
                <Col span={1}>:</Col>
                <Col span={8}>{selectedAntrian.name}</Col>
              </Row>
              <Row style={{ marginBottom: '1em' }}>
                <Col span={7}>Poli</Col>
                <Col span={1}>:</Col>
                <Col span={8}>{selectedAntrian.poli}</Col>
              </Row>
              <Row style={{ marginBottom: '1em' }}>
                <Col span={7}>Dokter</Col>
                <Col span={1}>:</Col>
                <Col span={8}>{selectedAntrian.dokter}</Col>
              </Row>
              <Row style={{ marginBottom: '1em' }}>
                <Col span={7}>No. Handphone</Col>
                <Col span={1}>:</Col>
                <Col span={8}>{selectedAntrian.phone}</Col>
              </Row>
              <Row style={{ marginBottom: '1em' }}>
                <Col span={7}>No. Antrian</Col>
                <Col span={1}>:</Col>
                <Col span={8} style={{ color: 'darkCyan' }}>
                  {selectedAntrian.number}
                </Col>
              </Row>
            </>
          ) : (
            <>
              <Row style={{ color: 'red', marginBottom: '1em' }}>
                <Col span={7}>Waktu</Col>
                <Col span={1}>:</Col>
                <Col span={8}></Col>
              </Row>
              <Row style={{ marginBottom: '1em' }}>
                <Col span={7}>Nama</Col>
                <Col span={1}>:</Col>
                <Col span={8}></Col>
              </Row>
              <Row style={{ marginBottom: '1em' }}>
                <Col span={7}>Poli</Col>
                <Col span={1}>:</Col>
                <Col span={8}></Col>
              </Row>
              <Row style={{ marginBottom: '1em' }}>
                <Col span={7}>Dokter</Col>
                <Col span={1}>:</Col>
                <Col span={8}></Col>
              </Row>
              <Row style={{ marginBottom: '1em' }}>
                <Col span={7}>No. Handphone</Col>
                <Col span={1}>:</Col>
                <Col span={8}></Col>
              </Row>
              <Row style={{ marginBottom: '1em' }}>
                <Col span={7}>No. Antrian</Col>
                <Col span={1}>:</Col>
                <Col span={8} style={{ color: 'darkCyan' }}></Col>
              </Row>
            </>
          )}
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
            {selectedAntrian && selectedAntrian.status === 'tidak tersedia' && (
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
                  loading={loadings[0]}
                  onClick={() => handleCancelAntrian(0)}
                >
                  Batal
                </Button>
              </ConfigProvider>
            )}

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
              <Select.Option value="Poli Umum">Poli Umum</Select.Option>
              <Select.Option value="Poli Gigi">Poli Gigi</Select.Option>
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
